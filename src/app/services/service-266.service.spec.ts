/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service266Service } from './service-266.service';

describe('Service266Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service266Service]
    });
  });

  it('should ...', inject([Service266Service], (service: Service266Service) => {
    expect(service).toBeTruthy();
  }));
});
