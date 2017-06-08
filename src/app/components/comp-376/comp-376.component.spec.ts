/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp376Component } from './comp-376.component';

describe('Comp376Component', () => {
  let component: Comp376Component;
  let fixture: ComponentFixture<Comp376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
