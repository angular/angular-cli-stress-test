/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4855Component } from './comp-4855.component';

describe('Comp4855Component', () => {
  let component: Comp4855Component;
  let fixture: ComponentFixture<Comp4855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
