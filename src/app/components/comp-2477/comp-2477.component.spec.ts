/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2477Component } from './comp-2477.component';

describe('Comp2477Component', () => {
  let component: Comp2477Component;
  let fixture: ComponentFixture<Comp2477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
