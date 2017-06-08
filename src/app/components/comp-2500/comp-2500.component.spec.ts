/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2500Component } from './comp-2500.component';

describe('Comp2500Component', () => {
  let component: Comp2500Component;
  let fixture: ComponentFixture<Comp2500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
