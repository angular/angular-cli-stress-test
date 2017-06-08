/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp468Component } from './comp-468.component';

describe('Comp468Component', () => {
  let component: Comp468Component;
  let fixture: ComponentFixture<Comp468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
