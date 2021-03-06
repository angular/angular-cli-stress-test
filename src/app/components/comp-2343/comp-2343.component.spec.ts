/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2343Component } from './comp-2343.component';

describe('Comp2343Component', () => {
  let component: Comp2343Component;
  let fixture: ComponentFixture<Comp2343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
