/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4037Component } from './comp-4037.component';

describe('Comp4037Component', () => {
  let component: Comp4037Component;
  let fixture: ComponentFixture<Comp4037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
