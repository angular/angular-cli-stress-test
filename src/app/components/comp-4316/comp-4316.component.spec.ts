/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4316Component } from './comp-4316.component';

describe('Comp4316Component', () => {
  let component: Comp4316Component;
  let fixture: ComponentFixture<Comp4316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
