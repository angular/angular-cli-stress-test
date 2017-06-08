/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4913Component } from './comp-4913.component';

describe('Comp4913Component', () => {
  let component: Comp4913Component;
  let fixture: ComponentFixture<Comp4913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
