/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4471Component } from './comp-4471.component';

describe('Comp4471Component', () => {
  let component: Comp4471Component;
  let fixture: ComponentFixture<Comp4471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
