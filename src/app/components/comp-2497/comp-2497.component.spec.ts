/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2497Component } from './comp-2497.component';

describe('Comp2497Component', () => {
  let component: Comp2497Component;
  let fixture: ComponentFixture<Comp2497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
