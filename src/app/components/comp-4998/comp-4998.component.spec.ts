/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4998Component } from './comp-4998.component';

describe('Comp4998Component', () => {
  let component: Comp4998Component;
  let fixture: ComponentFixture<Comp4998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
