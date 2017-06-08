/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1156Component } from './comp-1156.component';

describe('Comp1156Component', () => {
  let component: Comp1156Component;
  let fixture: ComponentFixture<Comp1156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
