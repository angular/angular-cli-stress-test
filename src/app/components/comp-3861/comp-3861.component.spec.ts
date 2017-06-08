/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3861Component } from './comp-3861.component';

describe('Comp3861Component', () => {
  let component: Comp3861Component;
  let fixture: ComponentFixture<Comp3861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
