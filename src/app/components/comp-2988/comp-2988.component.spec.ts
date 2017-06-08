/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2988Component } from './comp-2988.component';

describe('Comp2988Component', () => {
  let component: Comp2988Component;
  let fixture: ComponentFixture<Comp2988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
