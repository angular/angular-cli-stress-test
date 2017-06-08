/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3067Component } from './comp-3067.component';

describe('Comp3067Component', () => {
  let component: Comp3067Component;
  let fixture: ComponentFixture<Comp3067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
