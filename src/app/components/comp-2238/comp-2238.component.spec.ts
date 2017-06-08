/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2238Component } from './comp-2238.component';

describe('Comp2238Component', () => {
  let component: Comp2238Component;
  let fixture: ComponentFixture<Comp2238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
