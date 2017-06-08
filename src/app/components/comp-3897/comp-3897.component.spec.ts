/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3897Component } from './comp-3897.component';

describe('Comp3897Component', () => {
  let component: Comp3897Component;
  let fixture: ComponentFixture<Comp3897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
