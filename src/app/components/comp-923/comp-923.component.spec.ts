/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp923Component } from './comp-923.component';

describe('Comp923Component', () => {
  let component: Comp923Component;
  let fixture: ComponentFixture<Comp923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
