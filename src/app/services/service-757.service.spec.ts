/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service757Service } from './service-757.service';

describe('Service757Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service757Service]
    });
  });

  it('should ...', inject([Service757Service], (service: Service757Service) => {
    expect(service).toBeTruthy();
  }));
});
