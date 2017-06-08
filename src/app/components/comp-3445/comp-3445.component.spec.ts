/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3445Component } from './comp-3445.component';

describe('Comp3445Component', () => {
  let component: Comp3445Component;
  let fixture: ComponentFixture<Comp3445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
