/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3243Component } from './comp-3243.component';

describe('Comp3243Component', () => {
  let component: Comp3243Component;
  let fixture: ComponentFixture<Comp3243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
