/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service743Service } from './service-743.service';

describe('Service743Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service743Service]
    });
  });

  it('should ...', inject([Service743Service], (service: Service743Service) => {
    expect(service).toBeTruthy();
  }));
});
