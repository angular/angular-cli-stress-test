/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3573Component } from './comp-3573.component';

describe('Comp3573Component', () => {
  let component: Comp3573Component;
  let fixture: ComponentFixture<Comp3573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
