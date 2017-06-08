/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp917Component } from './comp-917.component';

describe('Comp917Component', () => {
  let component: Comp917Component;
  let fixture: ComponentFixture<Comp917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
