/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4840Component } from './comp-4840.component';

describe('Comp4840Component', () => {
  let component: Comp4840Component;
  let fixture: ComponentFixture<Comp4840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
