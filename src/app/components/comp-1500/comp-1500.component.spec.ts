/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1500Component } from './comp-1500.component';

describe('Comp1500Component', () => {
  let component: Comp1500Component;
  let fixture: ComponentFixture<Comp1500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
