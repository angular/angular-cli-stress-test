/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2386Component } from './comp-2386.component';

describe('Comp2386Component', () => {
  let component: Comp2386Component;
  let fixture: ComponentFixture<Comp2386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
