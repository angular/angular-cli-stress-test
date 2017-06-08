/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp898Component } from './comp-898.component';

describe('Comp898Component', () => {
  let component: Comp898Component;
  let fixture: ComponentFixture<Comp898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
