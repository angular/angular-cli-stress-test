/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4218Component } from './comp-4218.component';

describe('Comp4218Component', () => {
  let component: Comp4218Component;
  let fixture: ComponentFixture<Comp4218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
