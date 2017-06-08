/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3266Component } from './comp-3266.component';

describe('Comp3266Component', () => {
  let component: Comp3266Component;
  let fixture: ComponentFixture<Comp3266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
