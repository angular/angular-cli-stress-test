/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1176Component } from './comp-1176.component';

describe('Comp1176Component', () => {
  let component: Comp1176Component;
  let fixture: ComponentFixture<Comp1176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
