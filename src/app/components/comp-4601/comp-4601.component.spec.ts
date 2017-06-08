/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4601Component } from './comp-4601.component';

describe('Comp4601Component', () => {
  let component: Comp4601Component;
  let fixture: ComponentFixture<Comp4601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
