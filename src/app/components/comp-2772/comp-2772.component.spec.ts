/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2772Component } from './comp-2772.component';

describe('Comp2772Component', () => {
  let component: Comp2772Component;
  let fixture: ComponentFixture<Comp2772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
