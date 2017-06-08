/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4111Component } from './comp-4111.component';

describe('Comp4111Component', () => {
  let component: Comp4111Component;
  let fixture: ComponentFixture<Comp4111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
