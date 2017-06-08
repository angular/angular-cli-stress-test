/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3178Component } from './comp-3178.component';

describe('Comp3178Component', () => {
  let component: Comp3178Component;
  let fixture: ComponentFixture<Comp3178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
