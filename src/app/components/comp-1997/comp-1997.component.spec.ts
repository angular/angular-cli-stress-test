/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1997Component } from './comp-1997.component';

describe('Comp1997Component', () => {
  let component: Comp1997Component;
  let fixture: ComponentFixture<Comp1997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
