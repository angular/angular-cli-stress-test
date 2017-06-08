/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2597Component } from './comp-2597.component';

describe('Comp2597Component', () => {
  let component: Comp2597Component;
  let fixture: ComponentFixture<Comp2597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
