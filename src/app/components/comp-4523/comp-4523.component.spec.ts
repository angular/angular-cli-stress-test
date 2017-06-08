/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4523Component } from './comp-4523.component';

describe('Comp4523Component', () => {
  let component: Comp4523Component;
  let fixture: ComponentFixture<Comp4523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
