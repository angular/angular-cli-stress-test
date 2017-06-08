/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4326Component } from './comp-4326.component';

describe('Comp4326Component', () => {
  let component: Comp4326Component;
  let fixture: ComponentFixture<Comp4326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
