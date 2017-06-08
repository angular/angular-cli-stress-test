/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4583Component } from './comp-4583.component';

describe('Comp4583Component', () => {
  let component: Comp4583Component;
  let fixture: ComponentFixture<Comp4583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
