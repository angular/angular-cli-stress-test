/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp908Component } from './comp-908.component';

describe('Comp908Component', () => {
  let component: Comp908Component;
  let fixture: ComponentFixture<Comp908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
