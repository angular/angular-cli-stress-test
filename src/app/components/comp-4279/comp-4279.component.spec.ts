/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4279Component } from './comp-4279.component';

describe('Comp4279Component', () => {
  let component: Comp4279Component;
  let fixture: ComponentFixture<Comp4279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
