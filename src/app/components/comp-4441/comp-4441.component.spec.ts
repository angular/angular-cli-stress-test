/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4441Component } from './comp-4441.component';

describe('Comp4441Component', () => {
  let component: Comp4441Component;
  let fixture: ComponentFixture<Comp4441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
