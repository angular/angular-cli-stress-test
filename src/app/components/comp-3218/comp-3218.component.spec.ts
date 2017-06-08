/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3218Component } from './comp-3218.component';

describe('Comp3218Component', () => {
  let component: Comp3218Component;
  let fixture: ComponentFixture<Comp3218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
