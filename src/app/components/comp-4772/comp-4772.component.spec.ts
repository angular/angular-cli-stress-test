/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4772Component } from './comp-4772.component';

describe('Comp4772Component', () => {
  let component: Comp4772Component;
  let fixture: ComponentFixture<Comp4772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
