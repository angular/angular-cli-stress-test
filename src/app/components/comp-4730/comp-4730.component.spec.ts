/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4730Component } from './comp-4730.component';

describe('Comp4730Component', () => {
  let component: Comp4730Component;
  let fixture: ComponentFixture<Comp4730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
