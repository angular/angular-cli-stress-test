/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3175Component } from './comp-3175.component';

describe('Comp3175Component', () => {
  let component: Comp3175Component;
  let fixture: ComponentFixture<Comp3175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
