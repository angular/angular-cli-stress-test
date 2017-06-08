/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3166Component } from './comp-3166.component';

describe('Comp3166Component', () => {
  let component: Comp3166Component;
  let fixture: ComponentFixture<Comp3166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
