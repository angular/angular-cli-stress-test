/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3507Component } from './comp-3507.component';

describe('Comp3507Component', () => {
  let component: Comp3507Component;
  let fixture: ComponentFixture<Comp3507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
