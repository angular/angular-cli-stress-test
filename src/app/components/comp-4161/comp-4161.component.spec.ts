/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4161Component } from './comp-4161.component';

describe('Comp4161Component', () => {
  let component: Comp4161Component;
  let fixture: ComponentFixture<Comp4161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
