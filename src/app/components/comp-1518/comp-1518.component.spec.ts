/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1518Component } from './comp-1518.component';

describe('Comp1518Component', () => {
  let component: Comp1518Component;
  let fixture: ComponentFixture<Comp1518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
